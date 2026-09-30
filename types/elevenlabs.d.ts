declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': {
      'agent-id': string;
      placement?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'bottom' | 'top' | string;
      variant?: 'tiny' | 'compact' | 'full' | string;
      className?: string;
      style?: React.CSSProperties;
      [key: string]: any;
    };
  }
}
