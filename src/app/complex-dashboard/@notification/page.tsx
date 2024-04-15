import Card from "@/Components/card";
import Link from "next/link";

const Notification = () => {
  return (
    <Card>
      <p> Notification</p>
      <Link href="/complex-dashboard/archived">Archieved</Link>
    </Card>
  );
};

export default Notification;
