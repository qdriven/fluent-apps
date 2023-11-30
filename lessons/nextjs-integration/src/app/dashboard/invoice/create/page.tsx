import { Metadata } from 'next';
import React from "react";
import Breadcrumbs from "@/app/ui/invoice/breadcrumbs";
import {fetchCustomers} from "@/app/lib/dao";
import Form from "@/app/ui/invoice/create-form";

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoice' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoice/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
