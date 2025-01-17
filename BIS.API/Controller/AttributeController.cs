using BIS.Manager.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BIS.API.Controller
{
    [Route("api/[controller]")]
    public class AttributeController : ControllerBase
    {
        private readonly IAttributeManager _attributeManager;

        public AttributeController(IAttributeManager attributeManager)
        {
            _attributeManager = attributeManager;
        }

        [HttpGet("AllAspect")]
        public IActionResult GetAllAspect()
        {
            return Ok(_attributeManager.GetAllAspect());
        }
    }
}
