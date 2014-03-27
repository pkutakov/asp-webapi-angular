using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace EmptyProject.Controllers
{
    [System.Web.Http.AuthorizeAttribute]
    public class TestController : ApiController
    {
        [ResponseType(typeof(string))]
        public HttpResponseMessage Get(HttpRequestMessage request)
        {
            return request.CreateResponse("OK from Get()");
            //return new HttpResponseMessage(HttpStatusCode.Unauthorized);
        }
        [ResponseType(typeof(string))]
        [System.Web.Http.AuthorizeAttribute(Roles = "admin, operator")]
        public HttpResponseMessage Get(HttpRequestMessage request, int id)
        {
            return request.CreateResponse(String.Format("OK from Get({0})", id));
            //return new HttpResponseMessage(HttpStatusCode.Unauthorized);
        }

    }
}
