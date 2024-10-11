using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ClassLibrary;

[Table("City")]
[Index("CountryId", Name = "IX_City_Country_ID")]
public partial class City
{
    public int Population { get; set; }

    [Column("city_ascii")]
    [StringLength(50)]
    [Unicode(false)]
    public string CityAscii { get; set; } = null!;

    [Column("lat")]
    public double Lat { get; set; }

    [Column("lng")]
    public double Lng { get; set; }

    [Key]
    [Column("ID")]
    public int Id { get; set; }

    [Column("Country_ID")]
    public int CountryId { get; set; }

    [ForeignKey("CountryId")]
    [InverseProperty("Cities")]
    public virtual Country Country { get; set; } = null!;
}
