import Search from "@/app/ui/search";
import { lusitana } from "@/app/ui/fonts";
import React, { Suspense } from "react";
import { fetchInvoicesPages } from "@/app/lib/dao";
import { Metadata } from "next";
import { CreateInvoice } from "@/app/ui/invoice/buttons";
import { InvoicesTable } from "@/app/ui/invoice/table";
import Pagination from "@/app/ui/invoice/pagination";
import { InvoicesTableSkeleton } from "@/app/dashboard/components/Skeletons";

export const metadata: Metadata = {
  title: "Invoices",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
