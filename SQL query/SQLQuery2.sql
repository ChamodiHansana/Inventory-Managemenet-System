create table Category(

  CategoryId int identity(1,1),
  CategoryName varchar(100),
  Parent varchar(100),
  Status varchar(100)

)

create table Customer(

  CustomerId int identity(1,1),
  CustomerName varchar(100),
  Address varchar(300),
  Phone varchar(10)

)

create table Supplier(

  SupplierId int identity(1,1),
  SupplierName varchar(100),
  Address varchar(300),
  Phone varchar(10)

)

create table Product(

  ProductId int identity(1,1),
  ProductName varchar(100),
  ProductDesc varchar(1000),
  ProductCategory varchar(100),
  CostPrice decimal(10,2),
  SalePrice decimal(10,2),
  Status varchar(100)

)

create table Ordr(

  OrderId int identity(1,1),
  Date date,
  CategoryName varchar(100),
  ProductName varchar(100),
  Quantity int,
  SalePrice decimal(10,2),
  CustomerName varchar(100)

)

create table Purchase(

  PurchaseId int identity(1,1),
  Date date,
  CategoryName varchar(100),
  ProductName varchar(100),
  Quantity int,
  CostPrice decimal(10,2),
  SupplierName varchar(100)

)



