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
    public class purchaseController : Controller
    {

        public readonly IConfiguration _configuration;
        public purchaseController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select PurchaseId, CategoryName ,ProductName, SupplierName, Quantity,CostPrice, Date from Purchase";
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

        public JsonResult Post(Purchase purchase)
        {
            string query = @" insert into Purchase values 
                    ('" + purchase.Date + @"','" + purchase.CategoryName + @"','" + purchase.ProductName + @"'
                     '" + purchase.Quantity + @"','" + purchase.CostPrice + @"','" + purchase.SupplierName + @"',
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

            return new JsonResult("purchase Added Successfully");
        }

        [HttpPut]

        public JsonResult Put(Purchase purchase)
        {
            string query = @" update Purchase set 
                    Date = '" + purchase.Date + @"' ,
                    CategoryName = '" + purchase.CategoryName + @"' ,
                    ProductName = '" + purchase.ProductName + @"' ,
                    Quantity = '" + purchase.Quantity + @"' ,
                    SalePrice = '" + purchase.CostPrice + @"' ,
                    SupplierName = '" + purchase.SupplierName + @"'
                    where PurchaseId = " + purchase.PurchaseId + @" ";
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

            return new JsonResult("purchase Updated Successfully");
        }

        [HttpDelete("{id}")]

        public JsonResult Delete(int id)
        {
            string query = @" delete from Purchase
                    where PurchaseId = " + id + @"  ";
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

            return new JsonResult("purchase Deleted Successfully");
        }
    }
}
