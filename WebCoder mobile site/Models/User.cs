namespace Mobile_site.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("User")]
    public partial class User
    {
        public User()
        {
            SurveyAnswers = new HashSet<SurveyAnswer>();
        }

        public int UserID { get; set; }

        public bool OptimisedUI { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public int Score { get; set; }

        public virtual ICollection<SurveyAnswer> SurveyAnswers { get; set; }
    }
}
