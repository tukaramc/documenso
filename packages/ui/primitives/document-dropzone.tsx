'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { AlertTriangle, Plus } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

import { APP_DOCUMENT_UPLOAD_SIZE_LIMIT } from '@documenso/lib/constants/app';
import { megabytesToBytes } from '@documenso/lib/universal/unit-convertions';

import {
  DocumentDropzoneCardCenterVariants,
  DocumentDropzoneCardLeftVariants,
  DocumentDropzoneCardRightVariants,
  DocumentDropzoneContainerVariants,
  DocumentDropzoneDisabledCardCenterVariants,
  DocumentDropzoneDisabledCardLeftVariants,
  DocumentDropzoneDisabledCardRightVariants,
} from '../lib/document-dropzone-constants';
import { cn } from '../lib/utils';
import { Button } from './button';
import { Card, CardContent } from './card';

export type DocumentDropzoneProps = {
  className?: string;
  disabled?: boolean;
  disabledMessage?: string;
  onDrop?: (_file: File) => void | Promise<void>;
  onDropRejected?: () => void | Promise<void>;
  type?: 'document' | 'template';
  [key: string]: unknown;
};

export const DocumentDropzone = ({
  className,
  onDrop,
  onDropRejected,
  disabled,
  disabledMessage = 'You can upload up to 5 documents per month on your current plan.',
  type = 'document',
  ...props
}: DocumentDropzoneProps) => {
  const DocumentDescription = {
    document: {
      headline: disabled ? 'You have reached your document limit.' : 'Add a document',
    },
    template: {
      headline: 'Upload Template Document',
    },
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
    },
    multiple: false,
    disabled,
    onDrop: ([acceptedFile]) => {
      if (acceptedFile && onDrop) {
        void onDrop(acceptedFile);
      }
    },
    onDropRejected: () => {
      if (onDropRejected) {
        void onDropRejected();
      }
    },
    maxSize: megabytesToBytes(APP_DOCUMENT_UPLOAD_SIZE_LIMIT),
  });

  return (
    <motion.div
      className={cn('flex', className)}
      variants={DocumentDropzoneContainerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <Card
        role="button"
        className={cn(
          'focus-visible:ring-ring ring-offset-background flex flex-1 cursor-pointer flex-col items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          className,
        )}
        gradient={!disabled}
        degrees={120}
        aria-disabled={disabled}
        {...getRootProps()}
        {...props}
      >
        <CardContent className="text-muted-foreground/40 flex flex-col items-center justify-center p-6">
          {disabled ? (
            // Disabled State
            <div className="flex">
              <motion.div
                className="group-hover:bg-destructive/2 border-muted-foreground/20 group-hover:border-destructive/10 dark:bg-muted/80 a z-10 flex aspect-[3/4] w-24 origin-top-right -rotate-[22deg] flex-col gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
                variants={disabled ? DocumentDropzoneDisabledCardLeftVariants : undefined}
              >
                <div className="bg-muted-foreground/10 group-hover:bg-destructive/10 h-2 w-full rounded-[2px]" />
                <div className="bg-muted-foreground/10 group-hover:bg-destructive/10 h-2 w-5/6 rounded-[2px]" />
                <div className="bg-muted-foreground/10 group-hover:bg-destructive/10 h-2 w-full rounded-[2px]" />
              </motion.div>

              <motion.div
                className="group-hover:bg-destructive/5 border-muted-foreground/20 group-hover:border-destructive/50 dark:bg-muted/80 z-20 flex aspect-[3/4] w-24 flex-col items-center justify-center gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
                variants={disabled ? DocumentDropzoneDisabledCardCenterVariants : undefined}
              >
                <AlertTriangle
                  strokeWidth="2px"
                  className="text-muted-foreground/20 group-hover:text-destructive h-12 w-12"
                />
              </motion.div>

              <motion.div
                className="group-hover:bg-destructive/2 border-muted-foreground/20 group-hover:border-destructive/10 dark:bg-muted/80 z-10 flex aspect-[3/4] w-24 origin-top-left rotate-[22deg] flex-col gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
                variants={disabled ? DocumentDropzoneDisabledCardRightVariants : undefined}
              >
                <div className="bg-muted-foreground/10 group-hover:bg-destructive/10 h-2 w-full rounded-[2px]" />
                <div className="bg-muted-foreground/10 group-hover:bg-destructive/10 h-2 w-5/6 rounded-[2px]" />
                <div className="bg-muted-foreground/10 group-hover:bg-destructive/10 h-2 w-full rounded-[2px]" />
              </motion.div>
            </div>
          ) : (
            // Non Disabled State
            <div className="flex">
              <motion.div
                className="border-muted-foreground/20 group-hover:border-documenso/80 dark:bg-muted/80 a z-10 flex aspect-[3/4] w-24 origin-top-right -rotate-[22deg] flex-col gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
                variants={!disabled ? DocumentDropzoneCardLeftVariants : undefined}
              >
                <div className="bg-muted-foreground/20 group-hover:bg-documenso h-2 w-full rounded-[2px]" />
                <div className="bg-muted-foreground/20 group-hover:bg-documenso h-2 w-5/6 rounded-[2px]" />
                <div className="bg-muted-foreground/20 group-hover:bg-documenso h-2 w-full rounded-[2px]" />
              </motion.div>

              <motion.div
                className="border-muted-foreground/20 group-hover:border-documenso/80 dark:bg-muted/80 z-20 flex aspect-[3/4] w-24 flex-col items-center justify-center gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
                variants={!disabled ? DocumentDropzoneCardCenterVariants : undefined}
              >
                <Plus
                  strokeWidth="2px"
                  className="text-muted-foreground/20 group-hover:text-documenso h-12 w-12"
                />
              </motion.div>

              <motion.div
                className="border-muted-foreground/20 group-hover:border-documenso/80 dark:bg-muted/80 z-10 flex aspect-[3/4] w-24 origin-top-left rotate-[22deg] flex-col gap-y-1 rounded-lg border bg-white/80 px-2 py-4 backdrop-blur-sm"
                variants={!disabled ? DocumentDropzoneCardRightVariants : undefined}
              >
                <div className="bg-muted-foreground/20 group-hover:bg-documenso h-2 w-full rounded-[2px]" />
                <div className="bg-muted-foreground/20 group-hover:bg-documenso h-2 w-5/6 rounded-[2px]" />
                <div className="bg-muted-foreground/20 group-hover:bg-documenso h-2 w-full rounded-[2px]" />
              </motion.div>
            </div>
          )}

          <input {...getInputProps()} />

          <p className="text-foreground mt-8 font-medium">{DocumentDescription[type].headline}</p>

          <p className="text-muted-foreground/80 mt-1 text-sm">
            {disabled ? disabledMessage : 'Drag & drop your PDF here.'}
          </p>
          {disabled && (
            <Button className="hover:bg-warning/80 bg-warning mt-4 w-32" asChild>
              <Link href="/settings/billing">Upgrade</Link>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
