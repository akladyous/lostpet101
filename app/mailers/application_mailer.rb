class ApplicationMailer < ActionMailer::Base
  default from: "from@example.com", data: Time.zone.now
  layout 'mailer'
end
