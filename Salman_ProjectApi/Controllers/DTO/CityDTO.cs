using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Salman_ProjectApi.Controllers.DTO
{
    public class CityDTO
    {
        public int Population { get; set; }
        public string CityAscii { get; set; } = null!;

        public double Lat { get; set; }

        public double Lng { get; set; }

        public int Id { get; set; }

        public int CountryId { get; set; }

        public required string CountryName { get; set; }
    }

}
