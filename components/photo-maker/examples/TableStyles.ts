// Constant widths for table columns to ensure consistency
export const TABLE_COLUMN_WIDTHS = {
  photos: 200,
  style: 100,
  actions: 100,
} as const;

// Common table cell classes
export const TABLE_CELL_CLASSES = {
  photos: "p-2",
  text: "line-clamp-2 text-sm",
  muted: "line-clamp-2 text-sm text-muted-foreground",
} as const;