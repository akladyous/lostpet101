class FeedbackController < ApplicationController
  skip_before_action :authenticate_user


  def create
    @feedback = Feedback.new(feedback_params)
    if @feedback.valid?
      FeedbackMailer.send_feedback(@feedback).deliver_now
      render status: :ok
    else
      render status: :unprocessable_entity
    end
  end

  private
  def feedback_params
    params.require(:feedback).permit(:name, :email, :subject, :message)
  end
end
