require 'digest/md5'

module Jekyll
  module Md5Generator
    def md5(input)
      email_address = input ? input.downcase.strip : ''
      Digest::MD5.hexdigest(email_address)
    end
  end
end

Liquid::Template.register_filter(Jekyll::Md5Generator)
