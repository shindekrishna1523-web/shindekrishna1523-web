using BAL;
using Microsoft.AspNetCore.Mvc;
using MODEL;
using System.Data;
using System.Data.SqlClient;

namespace EmployeeData.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly EmployeeBAL _bal;
        private readonly IWebHostEnvironment _env;

        //public EmployeeController(EmployeeBAL bal, IWebHostEnvironment env)
        //{
        //    _bal = bal;
        //    _env = env;
        //}


        private readonly IConfiguration _config;   // <-- Declare here

        public EmployeeController(IConfiguration config, EmployeeBAL bal)
        {
            _config = config;
            _bal = bal;   // ✔ injected
        }
        public IActionResult Index()
        {
            var dt = _bal.GetList();
            return View(dt);
        }



        [HttpGet]
        public IActionResult fetch(string Name, string Code, string Department, string BadgeNo, bool? Active, bool? Approved)
        {
            DataTable dt = new DataTable();

            using (SqlConnection con = new SqlConnection(_config.GetConnectionString("DefaultConnection")))
            {
                using (SqlCommand cmd = new SqlCommand("dbo.usp_GetEmployeeById", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@Name", Name ?? "");
                    cmd.Parameters.AddWithValue("@Code", Code ?? "");
                    cmd.Parameters.AddWithValue("@Department", Department ?? "");
                    cmd.Parameters.AddWithValue("@BadgeNo", BadgeNo ?? "");

                    cmd.Parameters.AddWithValue("@Active", Active.HasValue ? Active.Value : (object)DBNull.Value);
                    cmd.Parameters.AddWithValue("@Approved", Approved.HasValue ? Approved.Value : (object)DBNull.Value);

                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(dt);
                }
            }

            return View(dt);
        }





        public IActionResult Create()
        {
            return View(new EmployeeModel());
        }

        [HttpPost]
        
        public IActionResult Create(EmployeeModel model, IFormFile Photo)
        {
            if (Photo != null)
            {
                string folder = "uploads/employee/";
                string fileName = Guid.NewGuid() + Path.GetExtension(Photo.FileName);

                string path = Path.Combine(_env.WebRootPath, folder);
                if (!Directory.Exists(path))
                    Directory.CreateDirectory(path);

                using (var fs = new FileStream(Path.Combine(path, fileName), FileMode.Create))
                {
                    Photo.CopyTo(fs);
                }

                model.PhotoPath = folder + fileName;
            }

            int newId = _bal.Insert(model);

            model.Code = _bal.GenerateEmployeeCode(newId);
            model.ID = newId;

            _bal.Update(model);

            return RedirectToAction("Index");
        }

        //public IActionResult Create(EmployeeModel model, IFormFile? Photo)
        //{
        //    if (!ModelState.IsValid)
        //        return View(model);

        //    if (Photo != null)
        //    {
        //        string folder = "uploads/employee/";
        //        string fileName = Guid.NewGuid() + Path.GetExtension(Photo.FileName);

        //        string path = Path.Combine(_env.WebRootPath, folder);
        //        if (!Directory.Exists(path))
        //            Directory.CreateDirectory(path);

        //        using var stream = new FileStream(Path.Combine(path, fileName), FileMode.Create);
        //        Photo.CopyTo(stream);

        //        model.PhotoPath = folder + fileName;
        //    }

        //    int newId = _bal.Insert(model);

        //    model.Code = _bal.GenerateEmployeeCode(newId);
        //    model.ID = newId;

        //    _bal.Update(model);

        //    return RedirectToAction("Index");
        //}


        public string SavePhoto(IFormFile Photo)
        {
            if (Photo == null) return null;

            string folder = "uploads/employee/";
            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", folder);

            if (!Directory.Exists(path))
                Directory.CreateDirectory(path);

            string fileName = Guid.NewGuid() + Path.GetExtension(Photo.FileName);
            string fullPath = Path.Combine(path, fileName);

            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                Photo.CopyTo(stream);
            }

            return folder + fileName;
        }



        public IActionResult Edit(int id)
        {
            var model = _bal.Fetch(id);
            if (model == null)
                return NotFound();

            return View("Create", model);
        }

        [HttpPost]
        public IActionResult Edit(EmployeeModel model, IFormFile? Photo)
        {
            if (Photo != null)
            {
                string folder = "uploads/employee/";
                string fileName = Guid.NewGuid() + Path.GetExtension(Photo.FileName);

                string path = Path.Combine(_env.WebRootPath, folder);
                if (!Directory.Exists(path))
                    Directory.CreateDirectory(path);

                using (var stream = new FileStream(Path.Combine(path, fileName), FileMode.Create))
                {
                    Photo.CopyTo(stream);
                }

                model.PhotoPath = folder + fileName;
            }

            _bal.Update(model);

            return RedirectToAction("Index");
        }

        public IActionResult Delete(int id)
        {
            _bal.Delete(id);
            return RedirectToAction("Index");
        }
    }
}
