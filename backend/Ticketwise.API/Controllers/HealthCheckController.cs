using Microsoft.AspNetCore.Mvc;

namespace Ticketwise.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HealthCheckController : Controller
    {
        [HttpGet]

        public ActionResult GetHealthCheck()
        {
            return Ok("TicketWise API Health is working fine");
        }
    }
}
