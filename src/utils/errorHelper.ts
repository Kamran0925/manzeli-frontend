export const formatErrorMessages = (
  errorData: Record<string, string[]> | undefined,
): string[] => {
  const messages: string[] = [];

  if (errorData) {
    Object.entries(errorData).forEach(([field, messagesArray]) => {
      if (Array.isArray(messagesArray)) {
        if (messagesArray.length > 1) {
          messagesArray.forEach(message => {
            messages.push(`${field}: ${message}`);
          });
        } else if (messagesArray.length === 1) {
          messages.push(`${field}: ${messagesArray[0]}`);
        }
      }
    });
  }

  return messages;
};
