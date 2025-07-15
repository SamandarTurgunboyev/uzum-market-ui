import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { File, ImageIcon, Upload, X } from 'lucide-react';
import * as React from 'react';
import formatFileSize from '../lib/formatFileSize';

interface FileDropProps {
  onFilesChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  className?: string;
  disabled?: boolean;
}

export function FileDrop({
  onFilesChange,
  accept,
  multiple = false,
  maxSize = 10 * 1024 * 1024, // 10MB default
  className,
  disabled = false,
}: FileDropProps) {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);
  const [error, setError] = React.useState<string>('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    if (maxSize && file.size > maxSize) {
      setError(`File size must be less than ${formatFileSize(maxSize)}`);
      return false;
    }
    return true;
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const fileArray = Array.from(newFiles);
    const validFiles = fileArray.filter(validateFile);

    if (validFiles.length !== fileArray.length) {
      return; // Error already set in validateFile
    }

    setError('');
    const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    if (disabled) return;

    handleFiles(e.dataTransfer.files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const openFileDialog = () => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <ImageIcon className="h-4 w-4" />;
    }
    return <File className="h-4 w-4" />;
  };

  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          'relative border-2 border-dashed rounded-lg p-6 transition-colors cursor-pointer',
          'hover:bg-muted/50',
          isDragOver && 'border-primary bg-primary/5',
          disabled && 'opacity-50 cursor-not-allowed',
          error && 'border-destructive',
          !error && !isDragOver && 'border-muted-foreground/25',
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          disabled={disabled}
        />

        <div className="flex flex-col items-center justify-center text-center">
          <Upload
            className={cn(
              'h-10 w-10 mb-4',
              isDragOver ? 'text-primary' : 'text-muted-foreground',
            )}
          />
          <p className="text-sm font-medium mb-1">
            {isDragOver
              ? 'Fayllarni shu yerga tashlang'
              : 'Yuklash uchun bosing yoki tortib tashlang'}
          </p>
          <p className="text-xs text-muted-foreground">
            {accept
              ? `Qabul qilingan formatlar: ${accept}`
              : 'Istalgan fayl turi'}
            {maxSize && ` • Maksimal hajm: ${formatFileSize(maxSize)}`}
          </p>
        </div>
      </div>

      {error && <p className="text-sm text-destructive mt-2">{error}</p>}

      {files.length > 0 && (
        <div className="mt-2 space-y-2">
          <p className="text-sm font-medium">Tanlangan fayllar:</p>
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-muted rounded-md"
            >
              <div className="flex items-center space-x-2">
                {getFileIcon(file)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium line-clamp-1">
                    {file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                type="button"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
