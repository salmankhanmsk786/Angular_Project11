using ClassLibrary;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Salman_ProjectApi.Controllers.DTO;
using System.IdentityModel.Tokens.Jwt;

namespace Salman_ProjectApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController (UserManager<AppUser> userManager, JWT_Handler jwtHndler) : ControllerBase
    {

        [HttpPost("login")]
        public async Task<IActionResult> loginAsync(loginRequest request) {
            AppUser? user  = await userManager.FindByNameAsync(request.UserName);

            if (user == null)
            {
                return Unauthorized("Bad User name");
            }
            bool success = await userManager.CheckPasswordAsync(user, request.PassWord);
            if (!success) {
                return Unauthorized("Bad Passowrd");
            
            }

            JwtSecurityToken token = await jwtHndler.GetJwtSecurityToken(user);

            string jwtString = new JwtSecurityTokenHandler().WriteToken(token);

            loginRespond respond = new()
            {

                Success = true,
                message = "success",
                token = jwtString
            };
            return Ok(respond);


        
        }
    }


}
