namespace Salman_ProjectApi.Controllers.DTO
{
    public class loginRespond
    {

        public required bool success { get; set; }
        public required string message { get; set; }

        public required string token { get; set; }
    }
}
