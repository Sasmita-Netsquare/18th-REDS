const DashboardCompnent = () => (
  <div className="space-y-6">
    {/* Stats Cards */}
    <div className="grid grid-cols-4 gap-4">
      <div className="p-4 bg-blue-500 text-white rounded-lg">
        <div>Events</div>
        <div className="text-2xl font-bold">573</div>
      </div>
      <div className="p-4 bg-pink-200 rounded-lg">
        <div>Speakers</div>
        <div className="text-2xl font-bold">2358</div>
      </div>
      <div className="p-4 bg-purple-200 rounded-lg">
        <div>Sponsors</div>
        <div className="text-2xl font-bold">434</div>
      </div>
      <div className="p-4 bg-green-200 rounded-lg">
        <div>Delegates</div>
        <div className="text-2xl font-bold">$245k</div>
      </div>
    </div>
    {/* Charts Placeholder */}
    <div className="grid grid-cols-2 gap-6">
      <div className="p-4 bg-white rounded-lg h-64" />
      <div className="p-4 bg-white rounded-lg h-64" />
    </div>
  </div>
);

export default DashboardCompnent;
