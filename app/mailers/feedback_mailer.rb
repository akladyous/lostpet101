class FeedbackMailer < ApplicationMailer
  def send_feedback(contact)
    @contact = contact
    mail to: @contact.email, subject: @contact.subject
  end
end
