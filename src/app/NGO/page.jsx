import WalletDisplay from "@/components/WalletDisplay";
import Link from "next/link";
export default function donorPage() {
  return (
    <div>
      <div className="m-3">
        {/* <WalletDisplay /> */}
        <Link href="/ngo/animalplanet">to ngo1</Link> 
      </div>
      <div>
      </div>
    </div>
  );
}
