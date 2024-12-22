export function getRecipientName(): string {
  const urlParams = new URLSearchParams(window.location.search);
  const recipient = urlParams.get('to');
  return recipient ? decodeURIComponent(recipient) : 'Dear Guest';
}