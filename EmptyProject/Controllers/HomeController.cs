using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EmptyProject.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult test401()
        {
            //HttpContext.GetOwinContext().Authentication.SignOut();
            return new HttpUnauthorizedResult();
        }

    }
    
}