declare namespace JSX {
    interface GdsGridProps extends React.HTMLAttributes<HTMLElement> {
      columns?: string;
      class?: string;
      debug?: boolean;
      "gap-v"?: string;
      "gap-h"?: string;
      padding?: string;
    }
  
    interface GdsCellProps extends React.HTMLAttributes<HTMLElement> {
      span?: string;
      padding?: string;
    }
  
    interface IntrinsicElements {
      "gds-grid": React.DetailedHTMLProps<GdsGridProps, HTMLElement>;
      "gds-cell": React.DetailedHTMLProps<GdsCellProps, HTMLElement>;
    }
  }