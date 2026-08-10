using Microsoft.AspNetCore.Mvc;

namespace Ticketwise.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HealthCheckController : Controller
    {
        [HttpGet]

        public OkResult GetHealthCheck()
        {
            return Ok();
        }
    }
}
