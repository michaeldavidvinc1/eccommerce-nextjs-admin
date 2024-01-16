import prismadb from "@/lib/prismadb";

interface DashboardPageProsp {
  params: { storeId: string }
}

const DashboardPage: React.FC<DashboardPageProsp> = async ({
  params
}) => {

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  })

  return (
    <div>{store?.name}</div>
  );
}

export default DashboardPage;