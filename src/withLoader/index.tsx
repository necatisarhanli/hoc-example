import React from 'react'

interface WithLoaderProps {
    loading: boolean
}


export function WithLoader<T extends WithLoaderProps = WithLoaderProps>(
  WrappedComponent: React.ComponentType<T>
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithTheme = (props: Omit<T, keyof WithLoaderProps>) => {
    // Fetch the props you want to inject. This could be done with context instead.


    // props comes afterwards so the can override the default ones.
    return <WrappedComponent {...(props as T)} />;
  };

  ComponentWithTheme.displayName = `withTheme(${displayName})`;

  return ComponentWithTheme;
}