namespace Salman_ProjectApi.Controllers.DTO
{
    public class loginRespond
    {

        public required bool Success { get; set; }
        public required string message { get; set; }

        public required string token { get; set; }
    }
}
