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
    public class CategaryController : Controller
    {
        public readonly IConfiguration _configuration;
        public CategaryController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select CategoryId, CategoryName ,Parent, Status from Category";
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

        public JsonResult Post(Category cat)
        {
            string query = @" insert into Category values 
                    ('" + cat.CategoryName + @"','" + cat.Parent + @"','" + cat.Status + @"')";
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

            return new JsonResult("Category Added Successfully");
        }

        [HttpPut]

        public JsonResult Put(Category cat)
        {
            string query = @" update Category set 
                    CategoryName = '" + cat.CategoryName + @"' ,
                    Parent = '" + cat.Parent + @"' ,
                    Status = '" + cat.Status + @"'
                    where CategoryId = " + cat.CategoryId + @" ";
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

            return new JsonResult("Category Updated Successfully");
        }

        [HttpDelete("{id}")]

        public JsonResult Delete(int id)
        {
            string query = @" delete from Category
                    where CategoryId = " + id + @"  ";
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

            return new JsonResult("Category Deleted Successfully");
        }
    }
}
