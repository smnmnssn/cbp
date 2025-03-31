export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 text-center p-4 mt-10">
      <p>Mölndals City Bil & Plåt – Vi hjälper dig med skador på bilen</p>
      <p className="text-md">Bangårdsvägen 8, 428 35 Kållered</p>
      <div className="text-md">
        <p>031-15 52 10</p>
      </div>
      <p className="text-xs mt-4">
        &copy; {new Date().getFullYear()} Mölndals City Bil & Plåt <br /> Alla
        rättigheter förbehållna.
      </p>
    </footer>
  );
}
