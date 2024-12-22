export function PhysicalAddress() {
  return (
    <div className="p-4">
      <p className="text-gray-600 mb-4">You can send your gift to the following address:</p>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="font-semibold">Sarah & John</p>
        <p className="text-gray-600 mt-2">
          123 Wedding Avenue<br />
          Apartment 4B<br />
          New York, NY 10001<br />
          United States
        </p>
      </div>
      
      <p className="text-sm text-gray-500 mt-4">
        Note: Please ensure to include a card with your name when sending physical gifts.
      </p>
    </div>
  );
}