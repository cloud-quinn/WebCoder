namespace Research_site.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("SurveyQuestion")]
    public partial class SurveyQuestion
    {
        public SurveyQuestion()
        {
            SurveyAnswers = new HashSet<SurveyAnswer>();
            Surveys = new HashSet<Survey>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int QuestionID { get; set; }

        [Column(TypeName = "text")]
        [Required]
        public string QuestionText { get; set; }

        public virtual ICollection<SurveyAnswer> SurveyAnswers { get; set; }

        public virtual ICollection<Survey> Surveys { get; set; }
    }
}
