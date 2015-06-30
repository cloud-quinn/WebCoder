namespace Research_site.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ResearchDB : DbContext
    {
        public ResearchDB()
            : base("name=ResearchDB")
        {
        }

        public virtual DbSet<Survey> Surveys { get; set; }
        public virtual DbSet<SurveyAnswer> SurveyAnswers { get; set; }
        public virtual DbSet<SurveyQuestion> SurveyQuestions { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Survey>()
                .HasMany(e => e.SurveyAnswers)
                .WithRequired(e => e.Survey)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Survey>()
                .HasMany(e => e.SurveyQuestions)
                .WithMany(e => e.Surveys)
                .Map(m => m.ToTable("QuestionIntoSurvey").MapLeftKey("SurveyID").MapRightKey("QuestionID"));

            modelBuilder.Entity<SurveyQuestion>()
                .Property(e => e.QuestionText)
                .IsUnicode(false);

            modelBuilder.Entity<SurveyQuestion>()
                .HasMany(e => e.SurveyAnswers)
                .WithRequired(e => e.SurveyQuestion)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<User>()
                .HasMany(e => e.SurveyAnswers)
                .WithRequired(e => e.User)
                .WillCascadeOnDelete(false);
        }
    }
}
