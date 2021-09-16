import {StackActions} from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef();
export const routeNameRef = React.createRef();

let dispatch;

let wasLoaded = false;

let drawer;

function setTopLevelNavigator(navigatorRef) {
  dispatch = navigatorRef;
}

function setDrawer(ref) {
  drawer = ref;
}

/**
 *
 * @param {string} routeName
 * @param {Object} [params]
 */
function navigate(routeName, params) {
  if (navigationRef.current) {
    return navigationRef.current.navigate(routeName, params);
  }
}

/**
 *
 * @param {string} routeName
 * @param {Object} [params]
 */
function replace(routeName, params) {
  if (navigationRef.current) {
    return navigationRef.current.dispatch(
      StackActions.replace(routeName, params),
    );
  }
}

function popToPop() {
  if (navigationRef.current) {
    return navigationRef.current.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }
}

function goHome() {
  if (navigationRef.current) {
    navigationRef.current.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
    return navigate('Home');
  }
}

function resetNavigation() {
  if (navigationRef.current) {
    return navigationRef.current.reset({
      index: 0,
      actions: [navigate('Home')],
    });
  }
}

function popToTop() {
  if (navigationRef.current) {
    return navigationRef.current.dispatch(StackActions.popToTop());
  }
}

/**
 *
 * @param {string} routeName
 * @param {Object} [params]
 */
function push(routeName, params) {
  if (navigationRef.current) {
    return navigationRef.current.dispatch(StackActions.push(routeName, params));
  }
}

function openDrawer() {
  drawer.navigation.openDrawer();
}

function navigateGoBack() {
  if (navigationRef.current) {
    return navigationRef.current.dispatch(StackActions.pop());
  }
}

function getActiveRouteName(state) {
  if (!state) {
    return;
  }
  const route = state.routes[state.index];
  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
}

function routeBreadCrumb() {
  let navigationState = navigationRef.current.getRootState();
  if (!navigationState) {
    return;
  }

  try {
    const x = [];
    while (navigationState.routes) {
      const route = navigationState.routes[navigationState.index];
      x.push(route.name);
      navigationState = route.state || {routes: null};
    }
    return x;
  } catch (e) {}
}

export default {
  navigate,
  setTopLevelNavigator,
  navigateGoBack,
  routeBreadCrumb,
  popToPop,
  resetNavigation,
  popToTop,
  getActiveRouteName,
  wasLoaded,
  push,
  openDrawer,
  setDrawer,
  replace,
  goHome,
};
