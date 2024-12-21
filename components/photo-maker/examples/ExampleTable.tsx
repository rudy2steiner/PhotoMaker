'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ExampleImage } from './ExampleImage';
import { TABLE_COLUMN_WIDTHS, TABLE_CELL_CLASSES } from './TableStyles';
import type { Example } from '@/lib/types/example';

interface ExampleTableProps {
  examples: Example[];
  onUseExample: (example: Example) => Promise<void>;
}

export function ExampleTable({ examples, onUseExample }: ExampleTableProps) {
  const t = useTranslations();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleUseExample = async (example: Example) => {
    try {
      setLoadingId(example.id);
      await onUseExample(example);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead style={{ width: TABLE_COLUMN_WIDTHS.photos }}>
              {t('common.table.photos')}
            </TableHead>
            <TableHead>{t('common.table.prompt')}</TableHead>
            <TableHead>{t('common.table.negativePrompt')}</TableHead>
            <TableHead style={{ width: TABLE_COLUMN_WIDTHS.style }}>
              {t('common.table.style')}
            </TableHead>
            <TableHead style={{ width: TABLE_COLUMN_WIDTHS.actions }}>
              {t('common.table.actions')}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {examples.map((example) => (
            <TableRow key={example.id}>
              <TableCell className={TABLE_CELL_CLASSES.photos}>
                <div className="grid grid-cols-2 gap-1">
                  {example.images.map((image, index) => (
                    <ExampleImage
                      key={index}
                      src={image}
                      alt={`Example ${example.id} - ${index + 1}`}
                    />
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className={TABLE_CELL_CLASSES.text}>{example.prompt}</p>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="start" className="max-w-sm p-2">
                    <p className="text-sm">{example.prompt}</p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className={TABLE_CELL_CLASSES.muted}>{example.negativePrompt}</p>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="start" className="max-w-sm p-2">
                    <p className="text-sm">{example.negativePrompt}</p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell>
                <span className="text-sm">{example.style}</span>
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full h-8"
                  disabled={loadingId === example.id}
                  onClick={() => handleUseExample(example)}
                >
                  {loadingId === example.id ? (
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    t('common.useExample')
                  )}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}