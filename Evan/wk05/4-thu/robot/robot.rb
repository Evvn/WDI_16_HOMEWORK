class Robot

  def initialize
    @name = "#{ [*('A'..'Z')].sample }#{ [*('A'..'Z')].sample }#{ [*(000..999)].sample }"
    mac_address = []
    while mac_address.length < 6
      random_num = [*(0..99)].sample.to_s
      if random_num.length == 1
        mac_address.push "0" + random_num
      else
        mac_address.push random_num
      end
    end
    @mac_address = mac_address.join '.'
    @instructions = 0
    @creation_time = Time.now
  end

  def name
    @instructions += 1
    return @name
  end

  def reset
    @reboot_time = Time.now
    @instructions += 1
    @name = "#{ [*('A'..'Z')].sample }#{ [*('A'..'Z')].sample }#{ [*(0..999)].sample }"
    return @name
  end

  def instruction_count
    return @instructions
  end

  def timers
    @lifetime = Time.at(Time.now - @creation_time).utc.strftime("%H:%M:%S")
    @last_reboot = Time.at(Time.now - @reboot_time).utc.strftime("%H:%M:%S")
    return "#{ @last_reboot } since last boot, #{ @lifetime } since creation."

  end

  def mac_address
    return @mac_address
  end

end
