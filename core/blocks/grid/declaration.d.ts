declare namespace JSX {
    interface GdsGridProps extends React.HTMLAttributes<HTMLElement> {
      columns?: string;
      class?: string;
      debug?: boolean;
      // Add any other props you want to allow here
    }
  
    interface GdsCellProps extends React.HTMLAttributes<HTMLElement> {
      span?: string;
      // Add the props you want to allow for gds-cell here
    }
  
    interface IntrinsicElements {
      "gds-grid": React.DetailedHTMLProps<GdsGridProps, HTMLElement>;
      "gds-cell": React.DetailedHTMLProps<GdsCellProps, HTMLElement>;
    }
  }