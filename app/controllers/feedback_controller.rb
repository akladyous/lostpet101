class FeedbackController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user

  def create
    @contact = Feedback.new(feedback_params)
    if @contact.valid?
      FeedbackMailer.send_feedback(@contact).deliver_now
      render status: :ok
    else
      render json: @contact.errors.full_messages.to_sentence, status: :unprocessable_entity
    end
  end

  private
  def feedback_params
    params.require(:feedback).permit(:first_name, :last_name, :email, :phone, :subject, :message)
  end
end
