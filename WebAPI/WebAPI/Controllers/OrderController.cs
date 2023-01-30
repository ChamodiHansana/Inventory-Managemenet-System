using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using InventoryWebAPI.Model;

namespace InventoryWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {

        public readonly IConfiguration _configuration;
        public OrderController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select OrderId, CategoryName ,ProductName, CustomerName, Quantity,SalePrice, Date from Ordr";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InventoryCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


        [HttpPost]

        public JsonResult Post(Order order)
        {
            string query = @" insert into Ordr values 
                    ('" + order.Date + @"','" + order.CategoryName + @"','" + order.ProductName + @"'
                     '" + order.Quantity + @"','" + order.SalePrice + @"','" + order.CustomerName + @"',
)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InventoryCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Order Added Successfully");
        }

        [HttpPut]

        public JsonResult Put(Order order)
        {
            string query = @" update Ordr set 
                    Date = '" + order.Date + @"' ,
                    CategoryName = '" + order.CategoryName + @"' ,
                    ProductName = '" + order.ProductName + @"' ,
                    Quantity = '" + order.Quantity + @"' ,
                    SalePrice = '" + order.SalePrice + @"' ,
                    CustomerName = '" + order.CustomerName + @"'
                    where OrderId = " + order.OrderId + @" ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InventoryCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Order Updated Successfully");
        }

        [HttpDelete("{id}")]

        public JsonResult Delete(int id)
        {
            string query = @" delete from Ordr
                    where OrderId = " + id + @"  ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InventoryCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); 

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Order Deleted Successfully");
        }
    }
}
