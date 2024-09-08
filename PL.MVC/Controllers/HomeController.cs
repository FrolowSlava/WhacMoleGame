using Microsoft.AspNetCore.Mvc;

namespace PL.MVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
