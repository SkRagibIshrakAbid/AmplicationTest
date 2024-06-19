import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { BranchList } from "./branch/BranchList";
import { BranchCreate } from "./branch/BranchCreate";
import { BranchEdit } from "./branch/BranchEdit";
import { BranchShow } from "./branch/BranchShow";
import { StockList } from "./stock/StockList";
import { StockCreate } from "./stock/StockCreate";
import { StockEdit } from "./stock/StockEdit";
import { StockShow } from "./stock/StockShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { InvoiceItemList } from "./invoiceItem/InvoiceItemList";
import { InvoiceItemCreate } from "./invoiceItem/InvoiceItemCreate";
import { InvoiceItemEdit } from "./invoiceItem/InvoiceItemEdit";
import { InvoiceItemShow } from "./invoiceItem/InvoiceItemShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ShopList } from "./shop/ShopList";
import { ShopCreate } from "./shop/ShopCreate";
import { ShopEdit } from "./shop/ShopEdit";
import { ShopShow } from "./shop/ShopShow";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InventoryManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Branch"
          list={BranchList}
          edit={BranchEdit}
          create={BranchCreate}
          show={BranchShow}
        />
        <Resource
          name="Stock"
          list={StockList}
          edit={StockEdit}
          create={StockCreate}
          show={StockShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="InvoiceItem"
          list={InvoiceItemList}
          edit={InvoiceItemEdit}
          create={InvoiceItemCreate}
          show={InvoiceItemShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Shop"
          list={ShopList}
          edit={ShopEdit}
          create={ShopCreate}
          show={ShopShow}
        />
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
      </Admin>
    </div>
  );
};

export default App;
