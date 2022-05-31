class User < ApplicationRecord
    validates :password, length: { minimum: 5, allow_nill: true}
    
    def password
        @password
    end
    
    def password=(raw)
        self.password_digest = BCrypt::Password.create(raw)
    end
    
    def is_password?(raw)
        BCrypt::Password.new(password_digest).is_password?(raw)
    end
end
