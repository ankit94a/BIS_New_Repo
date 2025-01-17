using BIS.Api.Authorization;
using BIS.Common.Entities.Auth;
using BIS.DB.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BIS.API.Controller
{
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IUserManager _userManager;
        readonly IJwtManager _jwtManager;
        public AuthController(IUserManager userManager,IJwtManager jwtManager)
        {
            _userManager = userManager;
            _jwtManager = jwtManager;
        }

        //[AllowAnonymous]
        [HttpPost]
        [Route("login")]
        public dynamic Login([FromBody] Login login)
        {
            IActionResult response = Unauthorized();
            var user = _userManager.GetUserByEmailPassword(login.UserName, login.Password);
            if (user != null)
            {
                var jwtToken = _jwtManager.GenerateJwtToken(user);
                var model = new
                {
                    corpsName = _userManager.GetUserNameByCorps(user.CorpsId),
                    divisionName = _userManager.GetUserNameByDivision(user.DivisionId),
                    userName = user.Name,
                    roleType = user.RoleType
                   

                };
                response = Ok(new { token = jwtToken,user = model });
            }
            return response;
        }
    }
}
