import Card from "@/Components/card";
import Link from "next/link";

export default function page() {
  return (
    <Card>
      <p>Archived Notification</p>
      <Link href="/complex-dashboard">Default </Link>
    </Card>
  );
}
