import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Reservation from "@/components/modules/Reservation/Reservation";
import React from "react";

function ReservationPage() {
  return (
    <>
      <PageHeader route="Reservation" />
      <Reservation />
    </>
  );
}

export default ReservationPage;
