import { TabBarProps } from './tab-bar';
import { useFoundation } from '@rmwc/base';
import { MDCTabBarFoundation } from '@material/tab-bar';
import { useRef, useEffect, useCallback, useState } from 'react';
import { TabScrollerApi } from './tab-scroller';
import { MDCTabInteractionEvent } from '@material/tab';
import { TabApi } from './tab';

export const useTabBarFoundation = (
  props: TabBarProps & React.HTMLProps<any>
) => {
  const tabScrollerApi = useRef<TabScrollerApi>();
  const setTabScrollerApi = (api: TabScrollerApi) =>
    (tabScrollerApi.current = api);

  const tabListRef = useRef<TabApi[]>([]);

  const { foundation, ...elements } = useFoundation({
    props,
    elements: { rootEl: true },
    foundation: ({ rootEl, emit, getProps }) => {
      return new MDCTabBarFoundation({
        scrollTo: (scrollX: number) => {
          tabScrollerApi.current && tabScrollerApi.current.scrollTo(scrollX);
        },
        incrementScroll: (scrollXIncrement: number) => {
          tabScrollerApi.current?.incrementScroll(scrollXIncrement);
        },
        getScrollPosition: () =>
          tabScrollerApi.current?.getScrollPosition() || 0,
        getScrollContentWidth: () =>
          tabScrollerApi.current?.getScrollContentWidth() || 0,
        getOffsetWidth: () => (rootEl.ref ? rootEl.ref.offsetWidth : 0),
        isRTL: () =>
          !!rootEl.ref &&
          window.getComputedStyle(rootEl.ref).getPropertyValue('direction') ===
            'rtl',
        setActiveTab: (index: number) =>
          activateTab(index, () => getProps().activeTabIndex),
        activateTabAtIndex: (index: number, clientRect: ClientRect) => {
          tabListRef.current[index] &&
            tabListRef.current[index].activate(clientRect);
        },
        deactivateTabAtIndex: (index: number) =>
          tabListRef.current[index] && tabListRef.current[index].deactivate(),
        focusTabAtIndex: (index: number) => tabListRef.current[index].focus(),
        getTabIndicatorClientRectAtIndex: (index: number) =>
          tabListRef.current[index] &&
          tabListRef.current[index].computeIndicatorClientRect(),
        getTabDimensionsAtIndex: (index: number) =>
          tabListRef.current[index] &&
          tabListRef.current[index].computeDimensions(),
        getPreviousActiveTabIndex: () => {
          for (let i = 0; i < tabListRef.current.length; i++) {
            if (tabListRef.current[i].getActive()) {
              return i;
            }
          }
          return -1;
        },
        getFocusedTabIndex: () => {
          const tabElements: Element[] = [].slice.call(
            rootEl.ref?.querySelectorAll(
              MDCTabBarFoundation.strings.TAB_SELECTOR
            )
          );
          const activeElement = document.activeElement as Element;
          return tabElements ? tabElements.indexOf(activeElement) : -1;
        },
        getIndexOfTabById: (id: string) => {
          for (let i = 0; i < tabListRef.current.length; i++) {
            if (tabListRef.current[i].id === id) {
              return i;
            }
          }
          return -1;
        },
        getTabListLength: () => tabListRef.current.length,
        notifyTabActivated: (index: number) =>
          emit('onActivate', { index }, true)
      });
    }
  });

  const { rootEl } = elements;

  const activateTab = useCallback(
    (index: number, getControlledTabIndex: () => number | undefined) => {
      // @ts-ignore ignoring unsafe protected access
      const adapter = foundation.adapter_;
      const previousActiveIndex = adapter.getPreviousActiveTabIndex();

      // @ts-ignore private method access
      if (!foundation.indexIsInRange_(index) || index === previousActiveIndex) {
        return;
      }

      adapter.notifyTabActivated(index);

      window.requestAnimationFrame(() => {
        if (
          getControlledTabIndex() === index ||
          getControlledTabIndex() === undefined
        ) {
          adapter.deactivateTabAtIndex(previousActiveIndex);
          adapter.activateTabAtIndex(
            index,
            adapter.getTabIndicatorClientRectAtIndex(previousActiveIndex)
          );
          foundation.scrollIntoView(index);
        }
      });
    },
    [foundation]
  );

  const registerTab = (tab: TabApi) => {
    tabListRef.current.push(tab);
    tabListRef.current.sort((a, b) => a.getIndex() - b.getIndex());
    const tabIndex = tab.getIndex();
    if (props.activeTabIndex === tabIndex) {
      activateTab(tabIndex, () => props.activeTabIndex);
    }
  };

  const unregisterTab = (tab: TabApi) => {
    tabListRef.current.splice(tabListRef.current.indexOf(tab), 1);
    tabListRef.current.sort((a, b) => a.getIndex() - b.getIndex());
  };

  const handleTabInteraction = useCallback(
    (evt: MDCTabInteractionEvent) => {
      foundation.handleTabInteraction(evt);
    },
    [foundation]
  );

  const handleKeyDown = (evt: React.KeyboardEvent | KeyboardEvent) => {
    props.onKeyDown?.(evt as React.KeyboardEvent);
    foundation.handleKeyDown(evt as KeyboardEvent);
  };

  rootEl.setProp('onKeyDown', handleKeyDown, true);

  useEffect(() => {
    const index = props.activeTabIndex || 0;
    activateTab(index, () => props.activeTabIndex);
  }, [props.activeTabIndex, foundation, activateTab]);

  useEffect(() => {
    // This corrects an issue where passing in 0 or no activeTabIndex
    // causes the first tab of the set to not be active

    // to make this even more annoying, Tabs focus by default
    // restore the focus and scroll position after we activate the tab
    const activeElement: any = window.document.activeElement;
    const [scrollX, scrollY] = [window.scrollX, window.scrollY];

    // restore focus and scroll
    window.requestAnimationFrame(() => {
      activeElement && activeElement.focus();
      window.scrollTo(scrollX, scrollY);
    });
  }, []);

  return {
    ...elements,
    setTabScrollerApi,
    handleTabInteraction,
    registerTab,
    unregisterTab
  };
};