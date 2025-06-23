import { format, parseISO } from 'date-fns';

/**
 * Format a date string or Date object to a human-readable format
 * @param {string|Date} dateValue - The date to format
 * @param {string} formatStr - The format string (default: 'MMM d, yyyy')
 * @returns {string} Formatted date string
 */
export const formatDate = (dateValue, formatStr = 'MMM d, yyyy') => {
  if (!dateValue) return '';
  
  try {
    const date = typeof dateValue === 'string' ? parseISO(dateValue) : dateValue;
    return format(date, formatStr);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

/**
 * Format a number as currency
 * @param {number} value - The value to format
 * @param {string} locale - The locale to use (default: 'en-US')
 * @param {string} currency - The currency code (default: 'USD')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value, locale = 'en-US', currency = 'USD') => {
  if (value === null || value === undefined) return '';
  
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return `${value}`;
  }
};

/**
 * Truncate text to a specified length
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @param {string} suffix - The suffix to add when truncated (default: '...')
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength, suffix = '...') => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  
  return `${text.substring(0, maxLength).trim()}${suffix}`;
};

/**
 * Format a file size in bytes to a human-readable format
 * @param {number} bytes - The file size in bytes
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted file size string
 */
export const formatFileSize = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Format a phone number to a standard format
 * @param {string} phoneNumber - The phone number to format
 * @returns {string} Formatted phone number
 */
export const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return '';
  
  // Remove all non-numeric characters
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  
  // Format US phone number
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  
  return phoneNumber;
};

/**
 * Get a relative time string (e.g., "5 minutes ago", "in 2 days")
 * @param {string|Date} dateValue - The date to format
 * @returns {string} Relative time string
 */
export const getRelativeTimeString = (dateValue) => {
  if (!dateValue) return '';
  
  try {
    const date = typeof dateValue === 'string' ? parseISO(dateValue) : dateValue;
    
    // Use Intl.RelativeTimeFormat when available or a simple fallback
    if (typeof Intl !== 'undefined' && Intl.RelativeTimeFormat) {
      const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
      const now = new Date();
      const diff = date - now;
      
      // Convert to appropriate unit
      const diffInSeconds = Math.floor(diff / 1000);
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);
      
      if (Math.abs(diffInDays) >= 1) {
        return rtf.format(diffInDays, 'day');
      } else if (Math.abs(diffInHours) >= 1) {
        return rtf.format(diffInHours, 'hour');
      } else if (Math.abs(diffInMinutes) >= 1) {
        return rtf.format(diffInMinutes, 'minute');
      } else {
        return rtf.format(diffInSeconds, 'second');
      }
    }
    
    // Fallback to simple date format
    return format(date, 'MMM d, yyyy');
  } catch (error) {
    console.error('Error formatting relative time:', error);
    return 'Invalid date';
  }
};