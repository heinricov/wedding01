import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BankAccountProps {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
}

export function BankAccount({ bankName, accountNumber, accountHolder }: BankAccountProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <p className="font-semibold">{bankName}</p>
      <p className="text-gray-600">{accountHolder}</p>
      <div className="flex items-center gap-2 mt-2">
        <code className="bg-white px-2 py-1 rounded flex-1">{accountNumber}</code>
        <Button variant="outline" size="icon" onClick={copyToClipboard}>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export function BankDetails() {
  return (
    <div className="p-4">
      <p className="text-gray-600 mb-4">Please choose one of the following bank accounts:</p>
      
      <BankAccount
        bankName="Bank BCA"
        accountNumber="1234567890"
        accountHolder="Sarah Williams"
      />
      
      <BankAccount
        bankName="Bank Mandiri"
        accountNumber="0987654321"
        accountHolder="John Smith"
      />
    </div>
  );
}